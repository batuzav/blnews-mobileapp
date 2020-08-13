import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Layout, Input, Text, Card } from "@ui-kitten/components";
import { styles } from "../components/styles/ContactStyles";
import MyText from "./MyText";

export default InnerModalContact = () => {
  return (
    <ScrollView
      style={{
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <Card style={styles.cardModal}>
        <Layout>
          <MyText style={{ fontSize: 16 }}>Atención a Clientes</MyText>
        </Layout>
      </Card>
      <Card style={styles.cardModal}>
        <Layout>
          <MyText style={{ fontSize: 16 }}>Finanzas</MyText>
        </Layout>
      </Card>
      <Card style={styles.cardModal}>
        <Layout>
          <MyText style={{ fontSize: 16 }}>Ética</MyText>
        </Layout>
      </Card>
      <Card style={styles.cardModal}>
        <Layout>
          <MyText style={{ fontSize: 16 }}>Sistemas</MyText>
        </Layout>
      </Card>
      <Card style={styles.cardModal}>
        <Layout>
          <MyText style={{ fontSize: 16 }}>Dirección Comercial</MyText>
        </Layout>
      </Card>
    </ScrollView>
  );
};
