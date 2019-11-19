#include <SimpleDHT.h>

int pinDHT11 = A0;
SimpleDHT11 dht11(pinDHT11);

void setup() {
  Serial.begin(9600);
}

void loop() {

  byte temperature = 0;
  byte humidity = 0;
  int err = SimpleDHTErrSuccess;
  if ((err = dht11.read(&temperature, &humidity, NULL)) != SimpleDHTErrSuccess) {
    return;
  }
  
 // Serial.print("Sample OK: ");
  Serial.print((int)temperature); Serial.print(";"); 
  Serial.println((int)humidity);
 
  delay(5000);
}
