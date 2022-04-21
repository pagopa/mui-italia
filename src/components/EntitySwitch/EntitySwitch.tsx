import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  Fragment,
  useMemo,
  useState,
} from "react";
import clsx from "clsx";
import { ringWidth, theme } from "@theme";
import {
  Box,
  Button,
  Drawer,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { ButtonUnstyledProps, useButton } from "@mui/base/ButtonUnstyled";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SentimentDissatisfied from "@mui/icons-material/SentimentDissatisfied";
import CloseIcon from '@mui/icons-material/Close';

import { EntityAccountItem } from "../EntityAccountItem";
import { EntityAccountItemButton } from "../EntityAccountItemButton";

export type EntitySwitchItem = {
  id: string;
  name: string;
  productRole?: string;
  logoUrl?: string;
};

export type EntitySwitchProps = {
  currentEntityId: string;
  entites: Array<EntitySwitchItem>;
  /* token: string; */
  onExit?: (entity: EntitySwitchItem) => void;
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

export const EntitySwitch = ({
  entites,
  onExit,
  currentEntityId,
}: EntitySwitchProps) => {
  const [selectedId, setSelectedId] = useState(currentEntityId);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const mobileHideStyle = useMemo(
    () => ({ display: { xs: "none", md: "none", lg: "block" } }),
    []
  );

  const filteredEntities = useMemo(() => {
    if (!filter) {
      return entites;
    }
    return entites.filter(
      (e) => e.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );
  }, [filter]);

  const selectedEntity = useMemo(
    () => filteredEntities.find((e) => e.id === selectedId),
    [selectedId]
  ) as EntitySwitchItem;

  const toggleDrawer = (openStatus: boolean) => {
    setOpen(openStatus);
  };

  const handleEntitySelection = (entity: EntitySwitchItem) => {
    setSelectedId(entity.id);
    setOpen(false);
    if (onExit) {
      onExit(entity);
    }
  };

  const handleFilterChange = (e: ChangeEvent) => {
    setFilter((e.target as any).value);
  };

  return (
    <Fragment>
      <EntitySwitchButton
        aria-describedby="entity-selection"
        aria-controls={open ? "entity-selection" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={() => toggleDrawer(true)}
      >
        <EntityAccountItem
          entityName={selectedEntity.name}
          entityRole={selectedEntity.productRole}
          image={selectedEntity.logoUrl}
          infoContainerSx={mobileHideStyle}
        />
        {open ? (
          <ArrowDropUpRoundedIcon sx={mobileHideStyle} />
        ) : (
          <ArrowDropDownRoundedIcon sx={mobileHideStyle} />
        )}
      </EntitySwitchButton>
      <CustomDrawer
        anchor="right"
        open={open}
        onClose={() => toggleDrawer(false)}
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
              <InputAdornment position="end" onClick={() => setFilter('')} sx={{cursor: 'pointer'}}>
                <CloseIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          sx={{ margin: "10px 20px" }}
          onChange={handleFilterChange}
          value={filter}
        />
        {filteredEntities.length > 0 &&
          filteredEntities.map((e) => (
            <EntityAccountItemButton
              key={e.id}
              entityName={e.name}
              entityRole={e.productRole}
              image={e.logoUrl}
              action={() => handleEntitySelection(e)}
              selectedItem={e.id === selectedId}
            />
          ))}
        {filteredEntities.length === 0 && (
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
    outline: "none",
    boxShadow: `0 0 0 ${ringWidth} ${alpha(theme.palette.primary.main, 0.4)}`,
  },

  "&.disabled": {
    opacity: "0.5",
    cursor: "default",
  },
}));

const EntitySwitchButton = forwardRef(function EntitySwitchButton(
  props: ButtonUnstyledProps,
  ref: ForwardedRef<any>
) {
  const { children } = props;
  const { /* active */ disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
    component: StyledSwitcherButton,
  });

  const classes = {
    /* active, */
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
