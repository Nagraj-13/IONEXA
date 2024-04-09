const int receivePin = 2;  // Pin to receive communication from ESP32
bool chargingDone = false;

void setup() {
  pinMode(receivePin, INPUT);

  // Initialize Serial for debugging
  Serial.begin(115200);
}

void loop() {
  // Check if there is a trigger signal from ESP32
  if (digitalRead(receivePin) == HIGH && !chargingDone) {
    // Send an SMS only once when triggered
    sendSMS("8105188413", "Charging is done");

    // Set the flag to indicate that charging is done
    chargingDone = true;

    // Reset trigger pin to LOW
    digitalWrite(receivePin, LOW);
  }

  // Your other code here
}

void sendSMS(const char* phoneNumber, const char* message) {
  Serial.println("AT+CMGF=1");
  delay(500);
  Serial.print("AT+CMGS=\"");
  Serial.print(phoneNumber);
  Serial.println("\"");
  delay(500);
  Serial.print(message);
  delay(500);
  Serial.write(26);  // Equivalent to sending Ctrl+Z to finish the message
  delay(1000);
}
