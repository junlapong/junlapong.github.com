# 3-D Secure 2.0 Thailand Seminar

10 November 2017, [Oriental Room 2nd Floor](https://goo.gl/maps/BscwtYrbw7r)

## Introductions

By  Siew Nee Yeo

![](https://raw.githubusercontent.com/junlapong/junlapong.github.io/master/notes/media/3ds-2.0.png)

## Section 1

by  Luke Parr

### General Introduction

### Roadmap, Benefits, Liability

### Domains & Messages

### Risk Based Authentication

## Section 2

by  Luke Parr

### Authentication Flows, and examples

#### Changes in flows

The biggest difference since 3DS 1.0 is the **Frictionless flow** which allows issuer to approve a transaction without cardholder interaction based on risk-based-authentication performed in the ACS. (Steps 1-4 at the figure below)

![](http://www.modirum.com/files/2017/05/3ds20.png)

#### Challenge flow

**Challenge flow** has got changed way of communication from the Issuer to Merchant. In 3DS 2.0 the result of challenge is communicated through the DS. (Step 6 at the figure below) Thus, Merchant is informed about the authentication results via a separate channel, which is more secure.

![](http://www.modirum.com/files/2017/05/3ds20-challenge.png)

### 3-D Secure SDK Specification

### Data Elements

### Testing & Certification

### Data Security/PCI Requirements

- VIP enhancements
  Refer to Visa Technical Letters (Article 4.1 and Article 3.7) *April 2018-note-PRE 3DS2.0 programme activation date

### VisaNet Enhancement

### Summary and Recap

## Resources

### About 3-D Secure 2.0
- *** [ABOUT 3D SECURE 2.0 BY EMVCO](https://www.gpayments.com/about/3d-secure-2.0)
- *** [How 3-D Secure 2.0 works](http://www.modirum.com/3dsecure/)
- *** [EMV® 3-D Secure - Specifications](https://www.emvco.com/emv-technologies/3d-secure/)
  - [Protocol and Core Functions Specification](https://www.emvco.com/wp-content/plugins/pmpro-customizations/oy-getfile.php?u=/wp-content/uploads/documents/EMVCo_3DS_Spec_210_1017.pdf)
  - [SDK Technical Guide](https://www.emvco.com/wp-content/uploads/documents/EMVCo_3DS_SdkTechGuide-2.1.0_1026.pdf)
  - [SDK Specification](https://www.emvco.com/wp-content/plugins/pmpro-customizations/oy-getfile.php?u=/wp-content/uploads/documents/EMVCo_3DS_SdkSpec_210_1017.pdf)
  - [SDK—Device Information](https://www.emvco.com/wp-content/plugins/pmpro-customizations/oy-getfile.php?u=/wp-content/uploads/documents/EMVCo_3DS_SDKDeviceInfo_210_1017.pdf)
  - [JSON Message Samples](https://www.emvco.com/wp-content/uploads/documents/EMVCo_3DS_Json_210_1026.pdf)
- *** [What Online Merchants Need to Know about 3-D Secure 2.0 (PDF)](https://goo.gl/yZLaqc)
- [EMV 3-D Secure 2.0, A new era in strong customer authentication \(PDF\)](https://worldline.com/content/dam/worldline/documents/publications/brochures/briefing-3dsecure-2p-en-ld.pdf)
- [WHAT IS THE NEW 3-D SECURE SPECIFICATION FOR PAYMENTS AND TRANSACTIONS?](https://goo.gl/xbjCDs)


### Video
- *** [Destination 3-D Secure 2.0](https://youtu.be/P_C2JzbRaI8)
- *** [Payment Security: Payment Protection without Friction](https://youtu.be/PpBCNFOoXEk)
- [Webinar EMV 3-D Secure 2.0: Second Time's the Charm?](https://youtu.be/B9ReYBC3p2k)
- [3D Secure 2 0: How Card Issuers Can Prepare](https://youtu.be/5H-nQfVmZUU)
- [Implementing EMV 3DS 2.0 - Compliant Solutions into a Mobile Device or Merchant App](https://youtu.be/S3YTLTJGisw)
- [3D Secure 1.0](https://youtu.be/B9ReYBC3p2k)


### Glossary

- CNP Card-Not-Present