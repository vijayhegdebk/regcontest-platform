#/bin/bash

echo "=================================================="
echo "   RegContest Platform - Starting Services..."
echo "=================================================="

echo "→ Starting Backend (FastAPI)..."
start cmd //c "cd backend && python -m venv venv 2>nul && venv\Scripts\activate && pip install -r requirements.txt && uvicorn app.main:app --reload --port 8000"

echo "→ Starting Frontend (Next.js)..."
start cmd //c "cd frontend && npm install && npm run dev"

echo ""
echo "✅ Both services started!"
echo "   Backend  → http://localhost:8000"
echo "   Frontend → http://localhost:3000"
echo ""
read -p "Press any key to exit..."