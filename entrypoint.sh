#!/bin/bash
set -e

rm -f /rails_web_app/tmp/pids/server.pid

exec "$@"