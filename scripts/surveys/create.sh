#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "surveyOptions": "'"[${OPTION1}, ${OPTION2}]"'"
      "responses": "'"[${RESPONSE1}, ${RESPONSE2}]"'",
    }
  }'

echo
