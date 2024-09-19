import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Grid,
  Typography,
  ButtonBase,
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
          borderRadius: "10px",
          padding: "8px",
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
          sx={{ position: "absolute", right: 30, top: 8 }}
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
              <ButtonBase
                onClick={() => handleFieldSelect(field.value)}
                sx={{
                  width: "100%",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <div style={{ marginRight: "8px" }}>{field.icon}</div>
                <Typography variant="body2" sx={{ fontSize: "14px" }}>
                  {field.label}
                </Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
