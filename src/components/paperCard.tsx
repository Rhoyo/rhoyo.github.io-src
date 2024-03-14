import * as React from "react"
import theme from "../style/theme";
import Paper from '@mui/material/Paper';

interface PaperCardProps {
    text: string; 
    elevation?: number;
  }

const PaperCard: React.FC<PaperCardProps> = ({ text, elevation=3 }) => {
  return (
    <Paper elevation={elevation}>
      <div>
        {text}
      </div>
    </Paper>
  );
};

export default PaperCard;