import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import connectCloudinary from './configs/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import courseRouter from './routes/courseRoute.js'

// Initialize Express
const app = express()

// Connect to database
await connectDB()
await connectCloudinary()

// Middlewares
app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      'http://localhost:3000',
      'https://lms-edemy-nu.vercel.app'
    ];
    // Allow all vercel.app subdomains and requests with no origin (like server-to-server or health checks)
    if (
      !origin || // allow requests with no origin
      allowed.includes(origin) ||
      (origin && origin.endsWith('.vercel.app'))
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}))
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/clerk', express.json() , clerkWebhooks)
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)
app.use('/api/educator', express.json(), educatorRouter)
app.use('/api/course', express.json(), courseRouter)
app.use('/api/user', express.json(), userRouter)

// Export for Vercel
export default app

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}