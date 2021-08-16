# What is a TLS/SSL certificate, and how does it work?

Posted on June 11, 2020 by Proton Team
An illustration of a TLS certificate.
Whenever you send or receive information on the Internet, it passes through a network of multiple computers to reach the destination. Historically, any of these computers could read your data, because it was not encrypted.

Much of this data is quite sensitive — and valuable to hackers. It can include private communications that are not end-to-end encrypted, financial information, and, for web applications that don’t use the Secure Remote Password protocol, even login credentials.

To protect sensitive data, security experts developed a new standard protocol to send and receive Internet traffic: Transport Layer Security (TLS). This was preceded by Secure Sockets Layer (SSL) but that has now largely been replaced by TLS.

In this article, we’ll cover the basic concepts behind TLS and TLS certificates. You can also skip around to the different sections:

What is TLS?
What is a TLS certificate?
How does a TLS certificate work?
What are the weaknesses of a TLS certificate?
Why trust Certificate Authorities?
Extra security precautions taken by ProtonMail
What is TLS?
Before we delve deeper into what a TLS certificate is or how it works, you should understand a bit of the underlying technology.

Transport Layer Security is a protocol that establishes an encrypted session between two computers on the Internet. It verifies the identity of the server and prevents hackers from intercepting any data.

TLS (and its predecessor SSL) allows users to securely transmit sensitive data when using the HTTPS protocol. In other words, HTTPS is HTTP layered on top of TLS. This technology is ideal for applications such as banking, information authentication, email exchange, and any other procedure requiring a higher level of privacy and security. TLS helps provide an enhanced layer of protection by encrypting the otherwise readable data, making it difficult for hackers to obtain private information.

Image showing how a TLS session is formed.
This framework provides privacy between the different endpoints of data transmission and ensures the data’s integrity. It also uses digital certificates to help verify the authenticity of servers. These certificates are commonly referred to as TLS certificates.

The authentication of these certificates happens using public key cryptography. This is  based on key pairs consisting of a public key and a private key. The decryption of encrypted data can happen only when both the public key and private key are present. TLS certificates use public key authentication to help verify that the data is being accessed by the intended recipient.

What is a TLS certificate?
Digital certificates, also known as identity certificates or public key certificates, are digital files that are used to certify the ownership of a public key. TLS certificates are a type of digital certificate, issued by a Certificate Authority (CA). The CA signs the certificate, certifying that they have verified that it belongs to the owners of the domain name which is the subject of the certificate.

What is a TLS certificate?
Digital certificates, also known as identity certificates or public key certificates, are digital files that are used to certify the ownership of a public key. TLS certificates are a type of digital certificate, issued by a Certificate Authority (CA). The CA signs the certificate, certifying that they have verified that it belongs to the owners of the domain name which is the subject of the certificate.

TLS certificates usually contain the following information:

The subject domain name
The subject organization
The name of the issuing CA
Additional or alternative subject domain names, including subdomains, if any
Issue date
Expiry date
The public key (The private key, however, is a secret.)
The digital signature by the CA
How does a TLS certificate work?
When a user tries to connect to a server, the server sends them its TLS certificate.

The user then verifies the server’s certificate using CA certificates that are present on the user’s device to establish a secure connection. This verification process uses public key cryptography, such as RSA or ECC, to prove the CA signed the certificate. As long as you trust the CA, this demonstrates you are communicating with the server certificate’s subject (e.g., ProtonMail.com).

So, does this mean that it is 100% secure and fool-proof? Well, not always.

What are the weaknesses of TLS certificates?
Although TLS certificates are generally secure, there are ways hackers can attack and potentially compromise TLS. These include:

Certificate store poisoning
If an attacker infects a computer with malicious software, they could gain access to the digital certificates stored on that device and insert a root certificate. This, along with the ability to fraudulently respond to that user’s website requests, would allow them to impersonate a website, thereby allowing them to read all data sent to it.

Attacking CAs directly
For TLS certification to work, the CA must be secure. Any breach of the CA could lead to the incorrect or fraudulent authorization of keys. This has happened occasionally in the past, with Comodo and DigiNotar being relatively high-profile examples.

Mistakenly issued certificates
Users rely on CAs to authenticate the server they connect to. However, sometimes there is an issue with a certificate that presents a vulnerability that hackers can exploit. When combined with an insecure Internet connection, an attacker could use a mis-issued certificate to compromise your connection with a server.

If all these issues exist, is it prudent to trust CAs blindly? Trust, yes. Blindly, no.

Why trust Certificate Authorities?
As the agents responsible for verifying that the data you received came from the server you expected and was not tampered with en route, CAs play an important role in the modern-day Internet. By issuing millions of digital certificates each year, they are the backbone of secure Internet communication, helping to encrypt billions of data exchanges and transactions.

The physical setup of a CA is known as its public key infrastructure (PKI). PKI consists of multiple operational elements, including hardware, software, security infrastructure, personnel, policy frameworks, auditing systems, and practice statements, all of which contribute to ensuring that the process of TLS certificate validation is trustworthy.

The trust model of the PKI relies on two major elements: root certificates (also referred to as trusted roots) and the server’s certificate. Any certificates issued by a CA will be automatically trusted by your browser, provided the CA’s root certificate is installed in the certificate store of your device. Every device has a certificate store, which is a local collection of root certificates from trusted CAs.

Extra security precautions taken by ProtonMail
While it is true that CAs and TLS-based encryption methods are relatively secure, there’s always scope for improvement.

Here at Proton, delivering enhanced privacy and security is our main goal. We use additional measures to establish connections that are secure and trustworthy. Listed below are some of the steps we take.

DNS Certificate Authority Authorization (CAA)
Back in 2011, when news came out regarding wrongly issued certificates, there arose a need for enhanced security mechanisms. One of the outcomes of that need is DNS CAA, which blocks the issuance of incorrect certificates.

Utilizing a DNS resource record lets domain owners decide which CAs are allowed to issue certificates for a given domain. If a CAA record exists, only the CAs listed in that record can issue the host’s certificate.

Although this provides some protection against unintended certificate misuse, it is very difficult for users to detect if a CA ignores the CAA advisory. This is why certificate transparency is necessary.

Certificate Transparency
To ensure the validity of certificates and prevent mis-issuances, all CAs post the certificates they have generated on public log servers, known as certificate transparency (CT) logs. These servers send a signature to the CA, promising to publish their certificate.

We serve an Expect-CT header, which tells the browser to require the presence of this signature. We also have monitoring and auditing servers that check the CT log for all promised certificates meant to be published.

Together, all these measures make it highly improbable for anyone, including a state actor, to generate a TLS certificate for protonmail.com and use it to intercept connections without being detected.

TLS Certificate Pinning
Certificate pinning is a process that links a service to their specific public key. Once a certificate gets established for a particular service, it is permanently pinned to the service. If there are multiple valid certificates for a given service, the pins are merged into a pinset. To validate a pinset, at least one element from the service must match the elements in the pinset. We pin the public key of our certificates in all our native apps.

Our mission is to build a safer Internet, and being informed about how your data is protected can empower you to make better decisions about the services you use. If you have any further questions or comments about TLS certificates or how we use them, feel free to reply in the comments or join the discussion on our social media channels.

Best Regards,
The ProtonMail Team

You can get a free secure email account from ProtonMail here.

We also provide a free VPN service to protect your privacy. ProtonMail and ProtonVPN are funded by community contributions. If you would like to support our development efforts, you can upgrade to a paid plan or donate. Thank you for your support.

***

Feel free to share your feedback and questions with us via our official social media channels on Twitter and Reddit. Note that while blog comments also remain open, questions and feedback will not be responded to individually. Where relevant, we will incorporate the most frequently asked questions or comments into a blog update.
