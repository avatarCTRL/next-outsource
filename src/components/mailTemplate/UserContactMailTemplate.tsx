import React from "react";
import {
  Head,
  Body,
  Container,
  Section,
  Text,
  Html,
} from "@react-email/components";
import type { UserContactFormData } from "@/types/User";

const UserContactMailTemplate = ({
  username,
  email,
  address,
  message,
}: UserContactFormData) => {
  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          {/* Header Section */}
          <Section style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1 style={{ color: "#333", fontSize: "24px", fontWeight: "600" }}>
              Outsource Contact Details :
            </h1>
          </Section>

          {/* Verification Message */}
          <Section>
            {/* <Text style={{ fontSize: "16px", color: "#333" }}>
              We received a request to create an account with your email
              address. To verify your email address, please copy the OTP below:
            </Text> */}

            <Text>
              Name : <b>{username}</b> <br />
              email : {email} <br />
              address : {address} <br />
              message :{" "}
              <div style={{ paddingLeft: "50px" }}>
                <pre>{message}</pre>
              </div>
            </Text>
          </Section>

          {/* Footer Section */}
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
              fontSize: "14px",
              color: "#777",
            }}
          >
            {/* <Text>If you did not request this, please ignore this email.</Text> */}
            <Text>
              © {new Date().getFullYear()} Our Service. All rights reserved.
            </Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
};

export default UserContactMailTemplate;
