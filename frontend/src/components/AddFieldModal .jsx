import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const fieldOptions = [
  {
    icon: <CheckIcon fontSize="small" />,
    label: "Multiple Choice",
    value: "multiple_choice",
  },
  {
    icon: <EditIcon fontSize="small" />,
    label: "Short Text",
    value: "short_text",
  },
  { icon: <MailIcon fontSize="small" />, label: "Email", value: "email" },
  {
    icon: <PhoneIcon fontSize="small" />,
    label: "Phone Number",
    value: "phone_number",
  },
  {
    icon: <BorderAllIcon fontSize="small" />,
    label: "Section",
    value: "section",
  },
  {
    icon: <InfoIcon fontSize="small" />,
    label: "Contact Information",
    value: "contact_information",
  },
  {
    icon: <LanguageIcon fontSize="small" />,
    label: "Country",
    value: "country",
  },
  {
    icon: <CheckBoxOutlineBlankIcon fontSize="small" />,
    label: "Legal",
    value: "legal",
  },
  {
    icon: <ArrowDropDownIcon fontSize="small" />,
    label: "Dropdown",
    value: "dropdown",
  },
];

export const AddFieldModal = ({ onClose, onSelectField }) => {
  const handleFieldSelect = (value) => {
    onSelectField(value);
    onClose();
  };

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          padding: "16px",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle>
        Add Field
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          overflow: "hidden",
          padding: 0,
        }}
      >
        <Grid container spacing={2}>
          {fieldOptions.map((field) => (
            <Grid item xs={12} sm={6} md={4} key={field.value}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>{field.icon}</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={() => handleFieldSelect(field.value)}
                  >
                    {field.label}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
