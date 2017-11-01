CyberSource FAQ
===============

## What is the difference between an authorization and capture?

From: https://goo.gl/TWBDPO

For a transaction to be completed successfully, you need to perform an `authorization` and a `capture` on the transaction. An authorization ensures that your customer's credit account is open, in good standing, and has sufficient funds to complete the submitted transaction.

If the card passes these checks, the issuing bank will place a hold on the funds for the amount of the authorization.

After a successful authorization has been completed, you will need to perform a capture to transfer funds from the customer's bank account to your merchant bank account.

A capture is also known as a `settlement`.

### Notes

trasaction_type: `sale` = `authorization` and a `capture`

## What is Device Fingerprint?

From: https://goo.gl/dWMyo3

`Device fingerprinting` is a method of collecting sets of unique and non-unique identifiers that enable you to detect identity morphing, the true location of a device, and the browsing habits of individuals.

Fraudsters typically run their fraudulent transactions from the same computer system but try to mask certain aspects of the order such as the IP address of the computer, what country they're in, etc.  The device fingerprint attempts to use aspects of the computer that don't typically change such as the operating system, browser, etc., and creates a unique “fingerprint” based on that information.  Despite what the fraudster changes on the surface of the system, the fingerprint remains the same, and identifies the computer that the orders originate from.

ThreatMetrix, our partner for device fingerprinting, uses “deep packet tracing” which uses information in the packets to detect risky device behavior like botnet activity, firewall scanning, spamming, etc., to trace the packets back to the originating system.  This means that even if a fraudster takes control of someone else's computer remotely (known as creating a zombie machine) and puts an order through, we can get information about the fraudster's system and use that to detect the fraudulent activity. If the fraudster moves to a different zombie machine, Decision Manager will still be able to identify the fraudulent activity by evaluating the true IP through its device fingerprint.


![](https://support.cybersource.com/library/KB/CYBERSOURCE/devicefingerprint.jpg)