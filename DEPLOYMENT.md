# Production Deployment Guide

This guide explains how to deploy the ASN Dashboard application using Docker in a production environment.

## Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+
- At least 1GB RAM
- 2GB disk space

## Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd asn_dashboard
```

### 2. Environment Configuration
Create a `.env` file in the root directory with the following variables:

```bash
# Flask Configuration
FLASK_ENV=production
SESSION_SECRET=your-very-secure-secret-key-here

# Database Configuration (for future use)
DATABASE_URL=postgresql://postgres:postgres@db:5432/asn_dashboard
POSTGRES_DB=asn_dashboard
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your-secure-database-password

# Application Configuration
DEBUG=False
HOST=0.0.0.0
PORT=5000
```

### 3. Deploy with Docker Compose
```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f web

# Stop services
docker-compose down
```

### 4. Deploy with Docker Only
```bash
# Build the image
docker build -t asn-dashboard .

# Run the container
docker run -d \
  --name asn-dashboard \
  -p 5000:5000 \
  -e SESSION_SECRET=your-secret-key \
  asn-dashboard
```

## Production Considerations

### Security
- Change the default `SESSION_SECRET` to a strong, random value
- Use strong database passwords
- Consider using Docker secrets for sensitive data
- Run behind a reverse proxy (nginx/Apache) with SSL/TLS

### Performance
- The Dockerfile is configured with 4 Gunicorn workers
- Adjust worker count based on your server's CPU cores: `workers = (2 x CPU cores) + 1`
- Consider using a load balancer for multiple instances

### Monitoring
- Health checks are configured for both web and database services
- Monitor container logs: `docker-compose logs -f`
- Set up external monitoring (Prometheus, Grafana, etc.)

### Backup
- Database data is persisted in a Docker volume
- Backup the `postgres_data` volume regularly
- Consider automated backup solutions

## Scaling

### Horizontal Scaling
```bash
# Scale web service to 3 instances
docker-compose up -d --scale web=3
```

### Resource Limits
Add resource limits to `docker-compose.yml`:
```yaml
services:
  web:
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using port 5000
   sudo lsof -i :5000
   # Change port in docker-compose.yml if needed
   ```

2. **Database connection issues**
   ```bash
   # Check database logs
   docker-compose logs db
   # Verify database is healthy
   docker-compose ps
   ```

3. **Application not starting**
   ```bash
   # Check application logs
   docker-compose logs web
   # Verify all dependencies are installed
   docker-compose exec web pip list
   ```

### Health Checks
- Web service: `curl http://localhost:5000/`
- Database: `docker-compose exec db pg_isready -U postgres`

## Updates

### Updating the Application
```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

### Database Migrations
When database functionality is implemented:
```bash
# Run migrations
docker-compose exec web flask db upgrade
```

## Environment Variables Reference

| Variable | Description | Default |
|----------|-------------|---------|
| `FLASK_ENV` | Flask environment | `production` |
| `SESSION_SECRET` | Flask session secret key | Required |
| `DATABASE_URL` | PostgreSQL connection string | Optional |
| `POSTGRES_DB` | Database name | `asn_dashboard` |
| `POSTGRES_USER` | Database user | `postgres` |
| `POSTGRES_PASSWORD` | Database password | Required |
| `DEBUG` | Enable debug mode | `False` |
| `HOST` | Application host | `0.0.0.0` |
| `PORT` | Application port | `5000` | 