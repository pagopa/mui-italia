"use client";

import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  Fragment,
  useEffect,
  useMemo,
  useState,
} from "react";
import clsx from "clsx";
import { focusWidth, focusOffset, focusBorderRadius, theme } from "@theme";
import {
  Box,
  Button,
  Drawer,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/base/Button";
import { useButton } from "@mui/base/useButton";

import SearchIcon from "@mui/icons-material/Search";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SentimentDissatisfied from "@mui/icons-material/SentimentDissatisfied";
import CloseIcon from "@mui/icons-material/Close";

import { PartyAccountItem } from "@components/PartyAccountItem";
import { PartyAccountItemButton } from "@components/PartyAccountItemButton";

export type PartySwitchItem = {
  id: string;
  name: string;
  productRole?: string;
  logoUrl?: string;
  parentName?: string;
};

export type PartySwitchProps = {
  currentPartyId: string;
  parties: Array<PartySwitchItem>;
  /* token: string; */
  onExit?: (party: PartySwitchItem) => void;
  /* The number of characters beyond which the multiLine is applied in component PartyAccountItemButton */
  maxCharactersNumberMultiLineButton?: number;
  /* The number of characters beyond which the multiLine is applied in component PartyAccountItem */
  maxCharactersNumberMultiLineItem?: number;
};

const CustomDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: "30vw",
  },
  ["@media only screen and (max-width: 576px)"]: {
    "& .MuiDrawer-paper": {
      width: "90vw",
    },
  },
  ["@media only screen and (min-width: 577px) and (max-width: 992px)"]: {
    "& .MuiDrawer-paper": {
      width: "40vw",
    },
  },
}));

export const PartySwitch = ({
  parties,
  onExit,
  currentPartyId,
  maxCharactersNumberMultiLineItem,
  maxCharactersNumberMultiLineButton,
}: PartySwitchProps) => {
  const [selectedId, setSelectedId] = useState(currentPartyId);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [visibleParties, setVisibleParties] = useState<Array<PartySwitchItem>>(
    []
  );
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  const mobileHideStyle = useMemo(
    () => ({ display: { xs: "none", md: "block" } }),
    []
  );

  const filteredParties = useMemo(() => {
    if (!filter) {
      return parties;
    }
    return parties.filter(
      (e) => e.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );
  }, [filter, parties]);

  const selectedParty = useMemo(
    () => filteredParties.find((e) => e.id === selectedId),
    [selectedId]
  ) as PartySwitchItem;

  useEffect(() => {
    setVisibleParties(filteredParties.slice(0, 50));
  }, [filteredParties]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef &&
        containerRef.scrollHeight - containerRef.scrollTop <=
          containerRef.clientHeight + 20 &&
        filteredParties.length > visibleParties.length
      ) {
        loadMoreParties();
      }
    };

    containerRef?.addEventListener("scroll", handleScroll);

    return () => {
      containerRef?.removeEventListener("scroll", handleScroll);
    };
  }, [visibleParties, filteredParties, selectedParty, containerRef]);

  const toggleDrawer = (openStatus: boolean) => {
    setOpen(openStatus);
  };

  const handlePartySelection = (party: PartySwitchItem) => {
    setSelectedId(party.id);
    setOpen(false);
    if (onExit) {
      onExit(party);
    }
  };

  const handleFilterChange = (e: ChangeEvent) => {
    setFilter((e.target as any).value);
  };

  const loadMoreParties = () => {
    const remainingParties = filteredParties.slice(visibleParties.length);
    const nextBatch = remainingParties.slice(0, 50);
    setVisibleParties((prevParties) => [...prevParties, ...nextBatch]);
  };

  return (
    <Fragment>
      <PartySwitchButton
        aria-describedby="party-selection"
        aria-controls={open ? "party-selection" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={() => toggleDrawer(true)}
      >
        <PartyAccountItem
          partyName={selectedParty.name}
          partyRole={selectedParty.productRole}
          image={selectedParty.logoUrl}
          infoContainerSx={mobileHideStyle}
          maxCharactersNumberMultiLine={maxCharactersNumberMultiLineItem}
          parentPartyName={selectedParty?.parentName}
        />
        {open ? (
          <ArrowDropUpRoundedIcon sx={mobileHideStyle} />
        ) : (
          <ArrowDropDownRoundedIcon sx={mobileHideStyle} />
        )}
      </PartySwitchButton>
      <CustomDrawer
        anchor="right"
        open={open}
        onKeyDownCapture={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            const partySelected = e.target;
            const selectedParty = filteredParties.find((p: PartySwitchItem) => {
              if (
                "textContent" in partySelected &&
                typeof partySelected.textContent === "string"
              ) {
                partySelected.textContent.includes(p.name);
              }
            });
            if (selectedParty) {
              handlePartySelection(selectedParty);
            }
          }
        }}
        onClose={() => toggleDrawer(false)}
        tabIndex={0}
        PaperProps={{ ref: (ref: HTMLDivElement) => setContainerRef(ref) }}
      >
        <Box sx={{ textAlign: "center", margin: "10px 0" }}>
          <Typography variant="overline">Accedi per un altro ente</Typography>
        </Box>
        <TextField
          label="Cerca ente"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: filter && (
              <InputAdornment
                position="end"
                onClick={() => setFilter("")}
                sx={{ cursor: "pointer" }}
              >
                <IconButton aria-label="elimina">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          sx={{ margin: "10px 20px" }}
          onChange={handleFilterChange}
          value={filter}
        />
        {visibleParties.length > 0 &&
          visibleParties.map((e) => (
            <PartyAccountItemButton
              key={e.id}
              partyName={e.name}
              partyRole={e.productRole}
              image={e.logoUrl}
              action={() => handlePartySelection(e)}
              selectedItem={e.id === selectedId}
              maxCharactersNumberMultiLine={maxCharactersNumberMultiLineButton}
              parentPartyName={e.parentName}
            />
          ))}
        {filteredParties.length === 0 && (
          <Fragment>
            <Box
              component="div"
              display="flex"
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                margin: "25px 0",
              }}
            >
              <SentimentDissatisfied
                color="primary"
                sx={{ verticalAlign: "middle", margin: "0 10px" }}
              />
              <Typography variant="body2" fontWeight={700} fontSize={18}>
                Nessun ente trovato
              </Typography>
            </Box>
            <Button variant="contained" sx={{ margin: "0 20px" }}>
              Aderisci per conto di un nuovo ente
            </Button>
          </Fragment>
        )}
      </CustomDrawer>
    </Fragment>
  );
};

const StyledSwitcherButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.spacing(1),
  backgroundColor: "transparent",
  padding: 0,
  cursor: "pointer",
  border: "none",
  transitionProperty: ["color", "background-color", "box-shadow"],

  "&.focusVisible": {
    borderRadius: `${focusBorderRadius}`,
    outline: `solid ${focusWidth} ${theme.palette.primary.main}`,
    outlineOffset: `${focusOffset}`,
    boxShadow: "none",
  },

  "&.disabled": {
    opacity: "0.5",
    cursor: "default",
  },
}));

const PartySwitchButton = forwardRef(function PartySwitchButton(
  props: ButtonProps,
  ref: ForwardedRef<any>
) {
  const { children, disabled } = props;
  const { focusVisible, getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  const classes = {
    disabled,
    focusVisible,
  };

  return (
    <>
      {/* Moved transition properties here because there
      were strange TS errors inside `styled` components */}
      <StyledSwitcherButton
        sx={{
          transition: `${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
        }}
        className={clsx(classes)}
        {...getRootProps()}
      >
        {children}
      </StyledSwitcherButton>
    </>
  );
});
