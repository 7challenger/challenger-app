while [ ! -f $(pwd)/build/server.js ]
do
  sleep 2
done
yarn start:ssr-server
