import {
    APIProvider,
    Map,
    AdvancedMarker,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const bloodBanks = [
    {
        id: 1,
        name: "City Blood Bank",
        position: { lat: 23.0225, lng: 72.5714 },
        address: "Ahmedabad, Gujarat",
        bloodGroup: "A+, B+, O+",
    },
    {
        id: 2,
        name: "Red Cross Blood Bank",
        position: { lat: 23.0396, lng: 72.5660 },
        address: "Ahmedabad, Gujarat",
        bloodGroup: "A-, O-, AB+",
    },
    {
        id: 3,
        name: "Life Care Blood Bank",
        position: { lat: 22.9970, lng: 72.5990 },
        address: "Ahmedabad, Gujarat",
        bloodGroup: "B+, O+, AB-",
    },
];

function BloodBankMap() {
    const [selectedBank, setSelectedBank] = useState(null);

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    console.log("Vite env:", import.meta.env.MODE);
    console.log(
        "Google Maps key loaded:",
        Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY)
    );

    if (!apiKey) {
        return <p className="p-4">Google Maps API Key is missing. Check your .env file.</p>;
    }

    return (
        <div>
            <Navbar />

            <div className="d-flex">
                <Sidebar />

                <main className="flex-grow-1 p-4" style={{ minWidth: 0 }}>
                    <h2 className="fw-bold mb-2">Blood Bank Locations</h2>
                    <p className="text-muted mb-4">
                        Find blood banks on Google Maps.
                    </p>

                    <div
                        className="bg-white rounded-3 shadow-sm p-2"
                        style={{ height: "500px" }}
                    >
                        <APIProvider apiKey={apiKey}>
                            <Map
                                defaultCenter={{ lat: 23.0225, lng: 72.5714 }}
                                defaultZoom={12}
                                mapId="DEMO_MAP_ID"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
                                }}
                            >
                                {bloodBanks.map((bank) => (
                                    <AdvancedMarker
                                        key={bank.id}
                                        position={bank.position}
                                        title={bank.name}
                                        onClick={() => setSelectedBank(bank)}
                                    />
                                ))}

                                {selectedBank && (
                                    <InfoWindow
                                        position={selectedBank.position}
                                        onCloseClick={() => setSelectedBank(null)}
                                    >
                                        <div>
                                            <h6 className="fw-bold">
                                                {selectedBank.name}
                                            </h6>
                                            <p className="mb-1">
                                                {selectedBank.address}
                                            </p>
                                            <p className="mb-0">
                                                Blood Groups: {selectedBank.bloodGroup}
                                            </p>
                                        </div>
                                    </InfoWindow>
                                )}
                            </Map>
                        </APIProvider>
                    </div>

                    <p className="text-muted small mt-3">
                        Note: Sample locations are used for demonstration.
                    </p>
                </main>
            </div>
        </div>
    );
}

export default BloodBankMap;