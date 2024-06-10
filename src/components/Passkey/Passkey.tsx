import { useState } from 'react';
import { v4 as idv4 } from 'id';

function Passkey({ user, setUser }) {

  const initialName = user.email ? user.email : "";
  const initialDisplayName = user.displayName ? user.displayName : "";

  const [name, setName] = useState(initialName);
  const [displayName, setDisplayName] = useState(initialDisplayName);

  const randomStringFromServer = "lkVOZ*ZA(f8lkaosO8(*^%));";
  const attestation = "direct" // Does the server want to verify which device was used to authenticate?
  // This can be tracked.  Options:
  // "none" - nope,
  // "indirect" - anonymized attestation data okay,
  // "direct" - the server wishes to receive the attestation data from the authenticator.

  const register = async () => {

    let id = user.id ? user.id : idv4();

    console.log("id:", id);
    console.log("typeof id:", typeof id);

    const publicKeyCredentialCreationOptions = {
      challenge: Uint8Array.from(
        randomStringFromServer, c => c.charCodeAt(0)),
      rp: {
        name: "Auth Is Cool",
        id: "localhost", // Must match the domain
      },
      user: {
        id: Uint8Array.from( // Must be a buffer, not a string, also don't use identifying info.
          id, c => c.charCodeAt(0)),
        name: name,
        displayName: displayName,
      },
      excludeCredentials: [],
      pubKeyCredParams: [{ alg: -7, type: "public-key" }],  // Here, we "choose the math" -7 is good (it's ES256), https://www.iana.org/assignments/cose/cose.xhtml#algorithms
      authenticatorSelection: { // empty means: user chooses any available
        // authenticatorAttachment: "platform", // "platform" means, this devices hardware, and store it on device.
        // authenticatorAttachment: "cross-platform", // "cross-platform" means, another device, like a phone or yubikey
      },
      timeout: 60000,
      attestation: attestation
    };

    const credential = await navigator.credentials.create({
      publicKey: publicKeyCredentialCreationOptions
    });
    console.log(credential);
  }

  const credentialId = "63097bf7-db7f-41dd-949f-2eb4d37e4858";


  const authenticate = async () => {
    const publicKeyCredentialRequestOptions = {
      challenge: Uint8Array.from(
        randomStringFromServer, c => c.charCodeAt(0)),
      allowCredentials: [{
        id: Uint8Array.from(
          credentialId, c => c.charCodeAt(0)),
        type: 'public-key',
        transports: ['usb', 'ble', 'nfc'],
      }],
      timeout: 60000,
    }

    const assertion = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions
    });

    const credential = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions
    });
    console.log(credential);

    // credential looks like:
    // PublicKeyCredential {
    //   id: 'ADSUllKQmbqdGtpu4sjseh4cg2TxSvrbcHDTBsv4NSSX9...',  // id of the created and stored credential
    //   rawId: ArrayBuffer(59),  // id of the created and stored credential, but as binary
    //   response: AuthenticatorAttestationResponse {
    //     clientDataJSON: ArrayBuffer(121),  // Data passed from the browser to the authenticator, as UTF-8 byte array
    //     attestationObject: ArrayBuffer(306),  // Data from the authenticator to the browser, including: the public key, optional attestation certificate (see attestation options).  Binary data encoded in CBOR (Concise Binary Object Representation)
    //   },
    //   type: 'public-key'
    // }
  }

  return (

    <>
      <p>Passkey</p>
      <button onClick={() => register()}>Register</button >
      <button onClick={() => authenticate()}>Log In</button >

      <p>id: {user.id}</p>
      <p>name: {name}</p>
      <p>display name: {displayName}</p>
    </>

  );
}

export default Passkey;
