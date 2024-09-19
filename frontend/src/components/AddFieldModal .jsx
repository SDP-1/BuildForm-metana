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

export const AddFieldModal = ({ onClose }) => {
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
          overflow: "hidden", // Prevent overflow
        },
      }}
    >
      <DialogTitle>
        Add field
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
          overflow: "hidden", // Prevent content overflow
          padding: 0,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <CheckIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Multiple Choice
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <EditIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Short Text
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <MailIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Email
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <PhoneIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Phone Number
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <BorderAllIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Section
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <InfoIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Contact Information
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <LanguageIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Country
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <CheckBoxOutlineBlankIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Legal
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <ArrowDropDownIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Dropdown
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
