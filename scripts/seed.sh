set -e


if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_SERVICE_ROLE_KEY" ]; then
echo "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set"
exit 1
fi


echo "Seeding database..."
# supabase seed commands or psql commands