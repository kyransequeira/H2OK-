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
    // Check if the username and password are correct for admin
    return username == "admin" && password == "password";
}

void uploadData(const GuestData& data) {
    // Save the guest data into a file for the admin to view
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
    // Allow the guest to input information
    GuestData guest;
    cout << "Welcome Guest!\n";
    cout << "Please enter the following information:\n";

    cout << "Location: ";
    cin.ignore(); // Clear the input buffer to allow for getline() to work correctly
    getline(cin, guest.location); // Input the location

    cout << "Water Quality (e.g., good, poor, etc.): ";
    getline(cin, guest.waterQuality); // Input the water quality

    cout << "Please upload an image (provide file path): ";
    getline(cin, guest.imagePath); // Input the image path

    // After all the data is gathered, submit it to the admin
    uploadData(guest);
}

int main() {
    string username, password;
    cout << "Enter username: ";
    cin >> username; // Input username
    cout << "Enter password: ";
    cin >> password; // Input password

    if (login(username, password)) {
        // If admin login is successful
        cout << "Welcome Admin!\n";
        // Admin-specific code could go here (e.g., viewing the collected data).
    } else {
        // If not admin, treat as guest and show guest interface
        guestInterface();
    }

    return 0;
}
