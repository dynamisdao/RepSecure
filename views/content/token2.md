If the current price of Rep is $6 you pay 1 ETH into a smart contract to secure that the future price of 100 Rep will be above $6 by Feb. 13th 2017.  The easiest way to specify a future date is to specify a block height.  The block height 3141592 will likely be mined on or prior to Feb. 13th 2017.  At this block height if the price of Rep is below the purchase price then the difference is paid out to policyholders.

**To protect the value of your 100 Rep, Rep-secure pays 200 Rep collateral into an ethereum smart contract.** So long as Reputation does not fall below a floor price of $2 then reputation token holders are fully protected against any losses due to a change in price.  If the price does fall below $2 then only a portion of people's losses would be mitigated.  This collateral protects policyholders in the following ways:

If the price of Rep at block 3141592 is above the current market price of $6 the collateral is returned to Rep-secure and the contract terminates.

If the price of Rep at block 3141592 is $5 which is $1 below the insured price of $6 then Rep-secure pays you 100 dollars in Ether and the collateral is returned to Rep-secure.  If Rep-secure fails to pay you the difference within the time allotted than the entire collateral would be forfeit to the insured party.

If the price of Rep at block 3141592 is $2 which is $4 below the insured price of $6 then the collateral would be forfeit to the insured party and the insured party would be able to sell their existing 100 Rep plus 200 Rep collateral for $2 to recover $600 the initial purchase price.

If the price of Rep at block 3141592 is $1.50 which is $4.50 below the insured price of $6 then the collateral would be forfeit to the insured party and the insured party would be able to sell their existing 100 Rep plus 200 Rep collateral for $1.50 to recover $450 or 75% of the initial purchase price.

### Instructions

To insure 100 Rep send exactly 100 Rep to an address which holds at least 1 ETH + enough gas to process all transaction fees for executing the contract (1.2 ETH). From that address send 1 ETH to the contract along with the contract code which will initiate your policy. Once you are informed of the text ID (hash) of your transaction place your text ID (hash) in the form at the bottom. The price of Rep which is insured is determined by the time when the form (see section below) is submitted to the repsecure website.  The website uses an API price feed from coinmarketcap.com which records the price at the time of submission.  Do not remove your 100 Rep until after Dec. 15th or the contract will be void.

To insure larger amounts of Rep simply increase the premium paid by 1 Eth for every additional 100 Rep insured.

### How does the escrow work?

In the same way that bitrated uses trust agents with reputation to protect customers Rep-secure uses escrow agents who have reputation to protect policyholders.  The multi-signature contract identifies three parties to the contract:

* Rep-secure
* The policyholder
* The escrow agent

Only two of these three parties are allowed to recieve the collateral in full, namely Rep-secure or the policyholder.  Any two signatures by either Rep-secure, the escrow agent, or the policy holder will release the collateral to either the policyholder or Rep-secure.  The way the escrow works is given in the following examples:

* If the price at block 3141592 is above the insured price then any two of three signatures will release the collateral back to Rep-secure.
* If the price at block 3141592 is below the insured price but above the $2 floor then Rep-secure is required to pay this difference to the customer in Ether.  
* If Rep-secure produces proof that a payment has been made which reconciles the difference between the price at block 3141592 and the insured price then any two of three signatures will release the entire collateral back to Rep-secure.
* If Rep-secure fails to produce proof that they have made a payment in Ether which completely reconciles the difference between the price at block 3141592 and the insured price then any two of three signatures will release the entire collateral to the Policyholder.
* If any disputes arise between Rep-secure and the policyholder as to who is entitled to redeem the collateral then escrow agents have the ultimate authority to resolve disputes and determine ownership of collateral funds or obligations required to release said funds to either party.
* If the price at block 3141592 is below $2 floor then the entire collateral is immediately released to the policyholder.

For every 100 Rep insured Rep-secure deposits a collateral amout determined by the formula: (CurrentRepPrice * 50) – 100 Rep.

### Terms and conditions

The terms of the contract are enforced using an Ethereum multi-sig which directs the entire Rep escrow to either the insured party or back to Rep-secure at a future date after block 3141592.  A weighted weekly average for the last 7 days prior to block 3141592 is used to determine the price.  All differences in price are calculated using dollars and are entirely reliant upon using an average of coinmarketcap and poloniex as a price feed.  Escrow agents are required to manually retrieve this data and record their findings and enforce the correct payment in Ether be made from Rep-secure to policyholders which reconciles price differences between the insured price and the price of Rep at block 3141592. Correct payment of the price difference in Ether allows Rep-secure to redeem the Rep used as collateral from the contract.  Payments in Ether required to make up the difference between the insured price and the price at block 3141592 will be required to use the Ether price at block 3141592 as reported by coinmarketcap.

If Rep-secure fails to pay the difference within 120 days then the collateral is paid in full to the insured party.  If the price is below the 2 dollar floor at block 3141592 then the collateral is released to the insured party.  

No price above 9 dollars will be secured with this contract.  If the current market price is above 9 dollars and a policy is purchased then a deposit which insures a maximum price of 9 dollars will be calculated.

Policyholders assume all risks associated with the transmit of Ethers to the policy made incorrectly.  No policies will be issued after Dec. 15th 2016.  Moving any portion of the Rep insured prior to that date to another address will void the contract.
