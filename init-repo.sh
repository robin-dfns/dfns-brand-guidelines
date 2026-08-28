#!/bin/sh
# Initialises this folder as a local git repository.
# Usage:  sh init-repo.sh
set -e

if [ -d .git ]; then
  echo "Already a git repository — nothing to do."
  exit 0
fi

git init
git add .
git commit -m "DFNS design system: tokens, components, UI kits, guidelines"
git branch -M main

echo
echo "Local repository created on branch 'main'."
echo "To publish it:"
echo "  git remote add origin git@github.com:<org>/dfns-design-system.git"
echo "  git push -u origin main"
