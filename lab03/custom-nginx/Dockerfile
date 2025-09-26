# Dockerfile
FROM nginx:1.29.1-alpine

# Add metadata
LABEL maintainer="m32889977@gmail.com"
LABEL version="1.0"
LABEL description="Custom NGINX with monitoring endpoints"

# Install additional tools for debugging
RUN apk add --no-cache curl htop vim

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy website files
COPY website/ /usr/share/nginx/html/

# Create custom healthcheck script
RUN echo '#!/bin/sh' > /healthcheck.sh && \
    echo 'curl -f http://localhost/api/info || exit 1' >> /healthcheck.sh && \
    chmod +x /healthcheck.sh

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD /healthcheck.sh

# Expose port (documentation purpose)
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]