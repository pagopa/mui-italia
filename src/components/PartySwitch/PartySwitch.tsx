"use client";

import { ButtonProps } from "@mui/base/Button";
import { useButton } from "@mui/base/useButton";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { ringWidth, theme } from "@theme";
import clsx from "clsx";
import {
  ChangeEvent,
  ForwardedRef,
  Fragment,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";

import { PartyAccountItem } from "@components/PartyAccountItem";
import { PartyAccountItemButton } from "@components/PartyAccountItemButton";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SentimentDissatisfied from "@mui/icons-material/SentimentDissatisfied";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  ["@media only screen and (max-width: 599px)"]: {
    "& .MuiDrawer-paper": {
      width: "100vw",
    },
  },
  ["@media only screen and (min-width: 600px)"]: {
    "& .MuiDrawer-paper": {
      width: "417px",
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
  const [offset, setOffset] = useState(50);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
  }, [filteredParties, selectedParty, containerRef]);

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
    setOffset((prevOffset) => prevOffset + 50);
  };

  const visibleParties = filteredParties.slice(0, offset);

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
        <Box
          m={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="overline">Accedi per un altro ente</Typography>
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseIcon aria-label="chiudi" width={3} height={3} />
          </IconButton>
        </Box>
        <TextField
          label="Cerca ente"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: filter && isMobile && (
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
          sx={{ mx: 3, mb: 1 }}
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
                my: 2.5,
              }}
            >
              <SentimentDissatisfied
                sx={{ verticalAlign: "middle", margin: "0 10px" }}
              />
              <Typography variant="body2" fontWeight={700} fontSize={18}>
                Nessun ente trovato
              </Typography>
            </Box>
            <Button variant="contained" sx={{ margin: "0 20px" }}>
              Registra un nuovo ente
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
    outline: "none",
    boxShadow: `0 0 0 ${ringWidth} ${alpha(theme.palette.primary.main, 0.4)}`,
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
