#include <iostream>
#include <fstream>
#include <string>

using namespace std;

struct GuestData {
    string location;
    string waterQuality;
    string imagePath;
};

bool login(string username, string password) {
    if (username == "admin" && password == "password") {
        return true;
    }
    return false;
}

void uploadData(const GuestData& data) {
    ofstream adminFile("admin_data.txt", ios::app);
    if (adminFile.is_open()) {
        adminFile << "Location: " << data.location << "\n";
        adminFile << "Water Quality: " << data.waterQuality << "\n";
        adminFile << "Image Path: " << data.imagePath << "\n\n";
        adminFile.close();
        cout << "Data sent to admin successfully.\n";
    } else {
        cout << "Error opening file to save data.\n";
    }
}

void guestInterface() {
    GuestData guest;
    cout << "Welcome Guest!\n";
    cout << "Please enter the following information:\n";

    cout << "Location: ";
    cin.ignore();
    getline(cin, guest.location);

    cout << "Water Quality (e.g., good, poor, etc.): ";
    getline(cin, guest.waterQuality);

    cout << "Please upload an image (provide file path): ";
    getline(cin, guest.imagePath);

    cout << "\nSubmitting your information...\n";
    uploadData(guest);
}

int main() {
    string username, password;
    cout << "Enter username: ";
    cin >> username;
    cout << "Enter password: ";
    cin >> password;

    if (login(username, password)) {
        cout << "Welcome Admin!\n";
        // Admin-specific code could go here (e.g., viewing the collected data).
    } else {
        guestInterface();
    }

    return 0;
}
