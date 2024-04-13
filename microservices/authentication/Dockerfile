FROM python:3.9-slim
WORKDIR /app
COPY . .
COPY templates /app/templates
COPY static /app/static
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 5001
CMD ["python", "authentication.py"]