require("dotenv").config();

const express      = require("express");
const mongoose     = require("mongoose");
const bodyParser   = require("body-parser");
const cors         = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel }    = require("./model/HoldingsModel");
const { PositionsModel }   = require("./model/PositionsModel");
const { OrdersModel }      = require("./model/OrdersModel");
const { Signup, Login }    = require("./Controllers/AuthController");
const { userVerification } = require("./Middlewares/AuthMiddleware");

const PORT      = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error("❌  MONGO_URL is not set in .env — check your .env file.");
  process.exit(1);
}

const app = express();

// ── Middleware ────────────────────────────────────────────────────
app.use(cors({
  origin: [
    "http://localhost:3000",  // Landing page / frontend
    "http://localhost:3001",  // Dashboard (Kite)
  ],
  credentials: true,          // Required so JWT cookies are sent cross-origin
}));
app.use(bodyParser.json());
app.use(cookieParser());

// ── Auth ──────────────────────────────────────────────────────────
app.post("/signup", Signup);
app.post("/login",  Login);
app.post("/",       userVerification);  // Verify JWT cookie

// ── Holdings ──────────────────────────────────────────────────────
app.get("/allHoldings", async (req, res) => {
  try {
    const data = await HoldingsModel.find({});
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: "Failed to fetch holdings", error: e.message });
  }
});

// ── Positions ─────────────────────────────────────────────────────
app.get("/allPositions", async (req, res) => {
  try {
    const data = await PositionsModel.find({});
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: "Failed to fetch positions", error: e.message });
  }
});

// ── Orders ────────────────────────────────────────────────────────
app.get("/allOrders", async (req, res) => {
  try {
    const data = await OrdersModel.find({});
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: "Failed to fetch orders", error: e.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || !qty || !mode) {
      return res.status(400).json({ message: "name, qty and mode are required" });
    }
    const order = new OrdersModel({ name, qty, price: price || 0, mode });
    await order.save();
    res.status(201).json({ message: "Order placed successfully!", order });
  } catch (e) {
    res.status(500).json({ message: "Failed to place order", error: e.message });
  }
});

// ── Start ─────────────────────────────────────────────────────────
app.listen(PORT, async () => {
  console.log(`✅  Backend running → http://localhost:${PORT}`);
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅  MongoDB connected");
  } catch (e) {
    console.error("❌  MongoDB connection failed:", e.message);
    console.error("    Check your MONGO_URL in .env");
  }
});
