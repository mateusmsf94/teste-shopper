"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const productsController_1 = __importDefault(require("./controllers/productsController"));
const productsService_1 = __importDefault(require("./services/productsService"));
const productsModel_1 = __importDefault(require("./database/models/productsModel"));
const packModel_1 = __importDefault(require("./database/models/packModel"));
const productsRoute_1 = __importDefault(require("./routes/productsRoute"));
const packRoute_1 = __importDefault(require("./routes/packRoute"));
const app = (0, express_1.default)();
const productService = new productsService_1.default(productsModel_1.default, packModel_1.default);
const productController = new productsController_1.default(productService);
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.use('/products', (0, productsRoute_1.default)(productController));
app.use('/packs', (0, packRoute_1.default)(productController));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3001, () => {
    console.log('Server running on port 3001');
});
