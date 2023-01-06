#!/bin/bash

# Check if a port number was provided as an argument
if [ $# -eq 0 ]
then
  echo "No port number provided"
  exit 1
fi

# Find the PID of the process running on the specified port
for pid in $(netstat -a -o -n | grep $1 | awk '{print $5}' | cut -d: -f1 | sort | uniq)
do
  if [ $pid -ne 0 ]
  then
    echo $(taskkill //F //PID $pid)
  fi 
done
