import React, { useState } from "react";
import { IconButton, TextField, Button, Switch } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";

const EmailSideBar = ({ onClose }) => {
  const [isRequired, setIsRequired] = useState(false);

  const handleRequiredToggle = () => {
    setIsRequired(!isRequired);
  };

  return (
    <div id="webcrumbs">
      <div className="w-[300px] bg-neutral-50 p-4 rounded-lg">
        <header className="flex justify-between items-center mb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <SettingsIcon
                className="text-neutral-600"
                style={{ fontSize: 25 }}
              />
              <p className="text-sm text-neutral-800">Settings</p>
            </div>
            <p className="text-xs text-neutral-400">Email</p>
          </div>
          <IconButton
            onClick={onClose}
            className="rounded-full p-1 bg-neutral-200"
          >
            <CloseIcon />
          </IconButton>
        </header>

        <form>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-neutral-800 text-sm">
              Title
            </label>
            <TextField fullWidth variant="outlined" size="small" />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold text-neutral-800 text-sm">
              Description
            </label>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              multiline
              rows={3}
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <label className="font-bold text-neutral-800 text-sm">
              Required
            </label>
            <Switch
              checked={isRequired}
              onChange={handleRequiredToggle}
              color="primary"
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "black", color: "white" }}
              className="flex-auto"
            >
              Save
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="error"
              className="flex-auto"
              onClick={onClose}
              style={{ borderColor: "transparent", color: "red" }} // Remove border color and keep text color
            >
              Discard
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSideBar;
