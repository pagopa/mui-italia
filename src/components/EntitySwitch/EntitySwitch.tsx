import { ChangeEvent, Fragment, useMemo, useState } from "react";
import {
  Box,
  Drawer,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";

import { EntityAccountItem } from "../EntityAccountItem";

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
  onExit?: (id: string) => void;
};

const CustomDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    maxWidth: '90%'
  }
}));

export const EntitySwitch = ({
  entites,
  onExit,
  currentEntityId,
}: EntitySwitchProps) => {
  const [selectedId, setSelectedId] = useState(currentEntityId);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const filteredEntities = useMemo(() => {
    if (!filter) {
      return entites;
    }
    return entites.filter(e => e.name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }, [filter]);


  const selectedEntity = useMemo(
    () => filteredEntities.find((e) => e.id === selectedId),
    [selectedId]
  ) as EntitySwitchItem;

  const toggleDrawer = (openStatus: boolean) => {
    setOpen(openStatus);
  };

  const handleEntitySelection = (id: string) => {
    setSelectedId(id);
    setOpen(false);
    if (onExit) {
      onExit(id);
    }
  };

  const handleFilterChange = (e: ChangeEvent) => {
    setFilter((e.target as any).value);
  };

  return (
    <Fragment>
      <EntityAccountItem
        entityName={selectedEntity.name}
        entityRole={selectedEntity.productRole}
        image={selectedEntity.logoUrl}
        onClick={() => toggleDrawer(true)}
        containerSx={{ p: 0, '&:hover': { backgroundColor: 'transparent' } }}
        infoContainerSx={{display: { xs: "none", md: "none", lg: "block" }}}
      />
      <CustomDrawer anchor="right" open={open} onClose={() => toggleDrawer(false)} sx={{maxWidth: '90%'}}>
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
          }}
          variant="outlined"
          size="small"
          sx={{ margin: "10px 20px" }}
          onChange={handleFilterChange}
        />
        {filteredEntities.map((e) => (
          <EntityAccountItem
            key={e.id}
            entityName={e.name}
            entityRole={e.productRole}
            image={e.logoUrl}
            onClick={() => handleEntitySelection(e.id)}
            isSelected={e.id === selectedId}
            noWrap={false}
          />
        ))}
      </CustomDrawer>
    </Fragment>
  );
};
