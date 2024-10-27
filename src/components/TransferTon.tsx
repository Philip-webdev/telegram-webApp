import { useState } from "react";
import {  Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";
import { SenderArguments } from "ton-core";
export function TransferTon() {
  const { sender, connected } = useTonConnect();

  const [tonAmount, setTonAmount] = useState("0.01");
  const [tonRecipient, setTonRecipient] = useState(
    "UQBx_jqTG0klK4UJZlaEfK0J5TvJmj3B3-vbpFBTmYdOODMR"
  );

  return (
    <Card>
      <FlexBoxCol>
        <h3>Transfer TON</h3>
        <FlexBoxRow>
          <label>Amount </label>
          <Input
           
            type="number"
            value={tonAmount}
            onChange={(e) => setTonAmount(e.target.value)}
          ></Input>
        </FlexBoxRow>
        <FlexBoxRow>
          <label>To </label>
          <Input
            style={{ marginRight: 8 }}
            value={tonRecipient}
            onChange={(e) => setTonRecipient(e.target.value)}
          ></Input>
        </FlexBoxRow>
        <Button 
          disabled={!connected}
          style={{ marginTop: 18}}
          onClick={async () => {
            const Recipient = Address.parse(tonRecipient) as Address;
           await sender.send({
              to:tonRecipient,
              value: toNano(tonAmount),
            });
          }}
        >
          Transfer
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
