function localtunnel {
  lt -s cmchase12345 --port 9999
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done