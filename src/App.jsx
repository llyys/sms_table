import React from "react";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { LogoTwilioIcon } from "@twilio-paste/icons/cjs/LogoTwilioIcon";

export function App() {
  return (
    <Box padding="space60">
      <Box display={"flex"}>
      <LogoTwilioIcon
        title="Twilio SMS Message History"
        size="sizeIcon80"
        color="colorTextBrandHighlight"
      />
      <Heading as="h1" variant="heading10">
        SMS Message History
      </Heading>
        
      </Box>
      <Box marginTop="space60">TODO: work on message history</Box>
    </Box>
  );
}
