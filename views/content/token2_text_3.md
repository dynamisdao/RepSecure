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
