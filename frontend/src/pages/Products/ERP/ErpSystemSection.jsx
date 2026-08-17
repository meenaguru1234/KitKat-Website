import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

// Icons for ERP module nodes
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";

/* -------------------------------------------------------
   1) ERP SYSTEM HUB DIAGRAM
------------------------------------------------------- */

// Each node has: title, text, icon, color, and x/y position (% of container)
const nodes = [
  {
    title: "Finance",
    text: "Accounting, expenses, tax compliance & reporting",
    icon: CurrencyRupeeIcon,
    color: "#16a34a",
    x: 28,
    y: 22,
    align: "left",
  },
  {
    title: "Production",
    text: "Planning, work orders & BOM management",
    icon: PrecisionManufacturingIcon,
    color: "#f97316",
    x: 62,
    y: 22,
    align: "right",
  },
  {
    title: "Sales",
    text: "Orders, quotations, invoicing & analytics",
    icon: ShowChartIcon,
    color: "#2563eb",
    x: 15,
    y: 40,
    align: "left",
  },
  {
    title: "Quality",
    text: "Inspection, compliance & non-conformance",
    icon: VerifiedUserIcon,
    color: "#16a34a",
    x: 75,
    y: 35,
    align: "right",
  },
  {
    title: "Inventory & Stores",
    text: "Stock tracking, inward & outward management",
    icon: Inventory2Icon,
    color: "#f97316",
    x: 15,
    y: 59,
    align: "left",
  },
  {
    title: "HR & Payroll",
    text: "Attendance, payroll & employee records",
    icon: GroupsIcon,
    color: "#2563eb",
    x: 80,
    y: 52,
    align: "right",
  },
  {
    title: "Purchase",
    text: "Purchase orders, suppliers & cost tracking",
    icon: ShoppingCartIcon,
    color: "#7c3aed",
    x: 28,
    y: 76,
    align: "left",
  },
  {
    title: "Service",
    text: "Ticket management & contract tracking",
    icon: SupportAgentIcon,
    color: "#dc2626",
    x: 72,
    y: 76,
    align: "right",
  },
];

// Bottom-center node (Admin & MIS) — connects straight down from hub
const adminNode = {
  title: "Admin & MIS",
  text: "User permissions, audit trails & strategic dashboards",
  icon: SettingsIcon,
  color: "#4b5563",
};

const NodeIcon = ({ node }) => {
  const Icon = node.icon;
  return (
    <Box
      sx={{
        position: "absolute",
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: node.align === "left" ? "flex-start" : "flex-end",
        textAlign: node.align,
        width: { xs: 130, md: 200 },
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: node.align === "left" ? "row" : "row-reverse",
          alignItems: "center",
          gap: 0.5,
          mb: 0.2,
        }}
      >
        <Box
          sx={{
            width: { xs: 44, md: 60 },
            height: { xs: 44, md: 60 },
            borderRadius: "50%",
            bgcolor: node.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          <Icon sx={{ color: "#fff", fontSize: { xs: 20, md: 28 } }} />
        </Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "0.8rem", md: "1.05rem" },
            color: "#071B52",
          }}
        >
          {node.title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "0.65rem", md: "0.8rem" },
          color: "#5b6b8c",
        }}
      >
        {node.text}
      </Typography>
    </Box>
  );
};

export const ErpSystemDiagram = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1100,
        mx: "auto",
        height: { xs: 400, md: 600 },
        py: 4,
      }}
    >
      {/* Connector lines (SVG, percentage-based so it scales) */}
      <Box
        component="svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
      >
        {nodes.map((n, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="#c7d2e6"
            strokeWidth="0.3"
            strokeDasharray="1.5,1.5"
          />
        ))}
        {/* line to Admin & MIS (straight down) */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="97"
          stroke="#c7d2e6"
          strokeWidth="0.3"
          strokeDasharray="1.5,1.5"
        />
      </Box>

      {/* Center hub */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 130, md: 190 },
          height: { xs: 130, md: 190 },
          borderRadius: "50%",
          bgcolor: "#0a1c4d",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          zIndex: 3,
          boxShadow: "0 8px 24px rgba(10,28,77,0.35)",
        }}
      >
        <Typography sx={{ fontWeight: 800, fontSize: { xs: "1rem", md: "1.4rem" }, lineHeight: 1.2 }}>
          ERP
        </Typography>
        <Typography sx={{ fontWeight: 800, fontSize: { xs: "1rem", md: "1.4rem" }, lineHeight: 1.2 }}>
          SYSTEM
        </Typography>
      </Box>

      {/* Surrounding nodes */}
      {nodes.map((node, i) => (
        <NodeIcon key={i} node={node} />
      ))}

      {/* Bottom-center Admin & MIS node */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "90%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 2,
          width: { xs: 220, md: 250 },
        }}
      >
        <Box
          sx={{
            width: { xs: 50, md: 64 },
            height: { xs: 50, md: 60 },
            borderRadius: "50%",
            bgcolor: adminNode.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 1,
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          <adminNode.icon sx={{ color: "#fff", fontSize: { xs: 15, md: 25 } }} />
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.85rem", md: "1.05rem" }, color: "#071B52" }}>
          {adminNode.title}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.7rem", md: "0.8rem" }, color: "#5b6b8c" }}>
          {adminNode.text}
        </Typography>
      </Box>
    </Box>
  );
};

/* -------------------------------------------------------
   2) COMPARISON TABLE: Custom ERP vs Off-the-Shelf
------------------------------------------------------- */

const comparisonRows = [
  { feature: "Built for Your Business", custom: "Yes, 100%", offshelf: "Limited Fit" },
  { feature: "Flexibility", custom: "High", offshelf: "Low" },
  { feature: "Ownership", custom: "You Own It", offshelf: "Vendor Owned" },
  { feature: "Recurring Cost", custom: "One-time Investment", offshelf: "Ongoing Per User Fees" },
  { feature: "Scalability", custom: "Unlimited", offshelf: "Limited by Platform" },
  { feature: "Integration", custom: "Easy & Customizable", offshelf: "Limited Options" },
  { feature: "Reports", custom: "Custom Reports", offshelf: "Fixed Templates" },
  { feature: "Competitive Advantage", custom: "Unique to Your Business", offshelf: "Same as Others" },
];

export const ErpComparisonTable = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.3rem", md: "1.7rem" }, mb: 3 }}
      >
        Custom ERP Software vs Off-the-Shelf Platforms
      </Typography>

      <Box sx={{ border: "1px solid #e5e9f2", borderRadius: 2, overflow: "hidden" }}>
        {/* Header row */}
        <Grid container>
          <Grid size={4} sx={{ bgcolor: "#f5f7fb", p: 2 }}>
            <Typography sx={{ fontWeight: 700, color: "#071B52" }}>Feature</Typography>
          </Grid>
          <Grid size={4} sx={{ bgcolor: "#16a34a", p: 2 }}>
            <Typography sx={{ fontWeight: 700, color: "#fff" }}>
              Custom ERP Software (KitKat)
            </Typography>
          </Grid>
          <Grid size={4} sx={{ bgcolor: "#dc2626", p: 2 }}>
            <Typography sx={{ fontWeight: 700, color: "#fff" }}>Off-the-Shelf ERP</Typography>
          </Grid>
        </Grid>

        {/* Data rows */}
        {comparisonRows.map((row, i) => (
          <Grid
            container
            key={i}
            sx={{
              borderTop: "1px solid #eef1f7",
              bgcolor: i % 2 === 0 ? "#fff" : "#fafbfd",
            }}
          >
            <Grid size={4} sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 600, color: "#071B52", fontSize: "0.9rem" }}>
                {row.feature}
              </Typography>
            </Grid>
            <Grid size={4} sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleIcon sx={{ color: "#16a34a", fontSize: 20 }} />
              <Typography sx={{ fontSize: "0.9rem", color: "#334155" }}>{row.custom}</Typography>
            </Grid>
            <Grid size={4} sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <CancelIcon sx={{ color: "#dc2626", fontSize: 20 }} />
              <Typography sx={{ fontSize: "0.9rem", color: "#334155" }}>{row.offshelf}</Typography>
            </Grid>
          </Grid>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2563eb",
            px: 4,
            py: 1.2,
            borderRadius: 2,
            fontWeight: 700,
            textTransform: "none",
            "&:hover": { bgcolor: "#1d4ed8" },
          }}
        >
          Book a Free Strategy Call
        </Button>
      </Box>
    </Box>
  );
};

/* -------------------------------------------------------
   3) PARENT SECTION (renders both side by side on desktop)
------------------------------------------------------- */

const ErpSystemSection = () => {
  return (
    <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 }, py: 0 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ErpSystemDiagram />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", alignItems: "center" }}>
        <ErpComparisonTable />
      </Grid>
    </Grid>
  );
};

export default ErpSystemSection;
