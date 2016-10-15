### Cost of purchasing insurance

Standard Contracts with a floor of $2 can be purchased for 1 ETH
     Deposits an escrow of (Current Rep Price \* 50 \* 1) – 100 REP

Fiat Contracts with a floor of $2 can be purchased for 5 ETH
     Deposits an escrow of (Current Rep Price \* 50 \* 5) – 500 REP

Grand Contracts with a floor of $2 can be purchased for 10 ETH
     Deposits an escrow of (Current Rep Price \* 50 \* 10) – 1000 REP


### Terms and Conditions

The terms of the contract are enforced using an Ethereum multsig which directs the entire Rep escrow to either the insured party or back to **Rep Secure** at a future date after block 3141592. A weighted weekly average for the last 7 days prior to block 3141592 is used to determine the price. Once the price is determined if the future price is below the insured price then **Rep Secure** will pay to make up the difference in Ether in order to redeem the Rep used as collateral. If **Rep Secure** fails to pay the difference within 120 days then the collateral is paid in full to the insured party.  If the price is below the 2 dollar floor at block 3141592 then the collateral is released to the insured party.

No price above 9 dollars will be secured with this contract.  If the current market price is above 9 dollars and a policy is purchased then a deposit which insures a maximum price of 9 dollars will be calculated.

Policyholders assume all risks associated with the transmit of Ethers to the policy made incorrectly.  No policies will be issued after Dec. 15th 2016.  Moving any portion of the Rep insured prior to that date to another address will void the contract.

A maximum of 30,000 Rep can be insured by this contract.  After this maximum is reached no further Rep will be insured.

### Let's Go!
