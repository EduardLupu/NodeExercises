parent_dir=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

for folder in "$parent_dir"/*; do
    if [ -d "$folder" ]; then
        ts_files=("$folder"/*.ts)
        if [ ${#ts_files[@]} -gt 0 ]; then
            echo "Building .ts files in $folder"
            npx tsc "$folder"/*.ts
            echo "Build complete for $folder"
        else
            echo "No .ts files found in $folder"
        fi
    fi
done