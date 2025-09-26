import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { hostname } from 'os';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(compression());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        hostname: hostname(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString()
    });
});

// Main endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Hello from optimized container!',
        container: hostname(),
        node_version: process.version,
        platform: process.platform
    });
});

// Metrics endpoint
app.get('/metrics', (req, res) => {
    res.json({
        memory: process.memoryUsage(),
        cpu: process.cpuUsage(),
        uptime: process.uptime()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Container ID: ${hostname()}`);
});