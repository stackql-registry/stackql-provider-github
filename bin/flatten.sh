#!/usr/bin/env bash

# Exit on error
set -e

# Get the script directory for relative paths
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"

# Default values
API_DIR=""
VERBOSE=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --api-dir)
      API_DIR="$2"
      shift 2
      ;;
    --verbose)
      VERBOSE=true
      shift
      ;;
    --help)
      echo "Usage: flatten.sh [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --api-dir DIR               Directory containing OpenAPI YAML files (required)"
      echo "  --verbose                   Enable verbose output"
      echo "  --help                      Show this help message"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Use --help for usage information"
      exit 1
      ;;
  esac
done

# Check required arguments
if [ -z "$API_DIR" ]; then
  echo "Error: Missing required arguments"
  echo "Use --help for usage information"
  exit 1
fi

echo "🪚 Flattening allOf constructs in OpenAPI YAML files..."
echo "API Directory: $API_DIR"

# Build command arguments
ARGS=("--api-dir" "$API_DIR")

if [ "$VERBOSE" = true ]; then
  ARGS+=("--verbose")
  echo "Verbose: Yes"
fi

# Run the Node.js script with arguments
node --experimental-modules "$SCRIPT_DIR/flatten.mjs" "${ARGS[@]}"

# Check if command succeeded
if [ $? -ne 0 ]; then
    echo "❌ Flatten operation failed"
    exit 1
fi

echo "✅ Flatten operation completed successfully"
