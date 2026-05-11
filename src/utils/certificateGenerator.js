import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Generates and downloads a professional certificate as a PDF.
 * @param {Object} data - { userName, courseTitle, completionDate, certificateId }
 */
export const downloadCertificate = async (data) => {
    const { userName, courseTitle, completionDate, certificateId } = data;

    // Create a temporary container for the certificate
    const element = document.createElement('div');
    element.style.position = 'fixed';
    element.style.left = '-9999px';
    element.style.top = '0';
    element.style.width = '1120px'; // A4 landscape ratio
    element.style.height = '792px';
    element.style.backgroundColor = 'white';

    // Certificate HTML with Tailwind-like styles and raw CSS for precision
    element.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;700;800;900&display=swap');
        </style>
        <div style="
            width: 1120px;
            height: 792px;
            padding: 30px;
            background: #fff;
            position: relative;
            font-family: 'Inter', sans-serif;
            color: #1a1a1a;
            box-sizing: border-box;
            border: 15px solid #f8f9fa;
        ">
            <!-- Inner Border -->
            <div style="
                width: 100%;
                height: 100%;
                border: 1px solid #e5e7eb;
                padding: 40px;
                box-sizing: border-box;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                text-align: center;
            ">
                <!-- Decorative Corners -->
                <div style="position: absolute; top: -5px; left: -5px; width: 40px; height: 40px; border-top: 8px solid #F8510C; border-left: 8px solid #F8510C;"></div>
                <div style="position: absolute; top: -5px; right: -5px; width: 40px; height: 40px; border-top: 8px solid #F8510C; border-right: 8px solid #F8510C;"></div>
                <div style="position: absolute; bottom: -5px; left: -5px; width: 40px; height: 40px; border-bottom: 8px solid #F8510C; border-left: 8px solid #F8510C;"></div>
                <div style="position: absolute; bottom: -5px; right: -5px; width: 40px; height: 40px; border-bottom: 8px solid #F8510C; border-right: 8px solid #F8510C;"></div>

                <!-- Logo/Brand -->
                <div style="margin-top: 20px; margin-bottom: 30px;">
                    <h2 style="color: #F8510C; font-size: 24px; font-weight: 900; letter-spacing: -1px; margin: 0;">COURSES<span style="color: #1a1a1a;">4ME</span></h2>
                    <p style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; margin-top: 2px;">Professional Excellence</p>
                </div>

                <h1 style="font-size: 42px; font-weight: 900; margin: 0; color: #111827; text-transform: uppercase; letter-spacing: 4px;">Certificate</h1>
                <h3 style="font-size: 14px; font-weight: 500; color: #6b7280; margin: 8px 0 35px; letter-spacing: 6px; text-transform: uppercase;">of Completion</h3>

                <p style="font-size: 14px; color: #6b7280; margin-bottom: 15px; font-weight: 500;">This is to certify that</p>
                <h2 style="font-size: 38px; font-weight: 800; color: #F8510C; margin: 0 0 25px; border-bottom: 1.5px solid #f3f4f6; padding-bottom: 8px; min-width: 350px;">${userName}</h2>

                <p style="font-size: 14px; color: #6b7280; max-width: 500px; line-height: 1.5; margin-bottom: 10px;">
                    has successfully completed the professional training requirements for the course
                </p>
                <h4 style="font-size: 22px; font-weight: 800; color: #111827; margin: 5px 0 10px; max-width: 700px;">${courseTitle}</h4>

                <!-- Footer Section (Locked into frame) -->
                <div style="
                    position: absolute;
                    bottom: 45px;
                    left: 50px;
                    right: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                ">
                    <!-- Certificate ID (Left) -->
                    <div style="text-align: left; width: 220px;">
                        <p style="font-size: 9px; font-weight: 800; color: #9ca3af; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 1px;">Verification ID</p>
                        <p style="font-size: 11px; font-family: 'Courier New', monospace; font-weight: 700; color: #4b5563;">${certificateId}</p>
                    </div>

                    <!-- Director Signature (Center) -->
                    <div style="text-align: center; width: 400px; position: relative;">
                         <div style="margin-bottom: 25px; text-align: center;">
                            <p style="font-size: 11px; color: #9ca3af; font-weight: 700; margin-bottom: 2px; text-transform: uppercase;">Issued on</p>
                            <p style="font-size: 14px; font-weight: 800; color: #111827;">${completionDate}</p>
                        </div>
                        <div style="position: relative; height: 70px; width: 100%;">
                            <!-- Signature Text (Floating above line) -->
                            <p style="font-family: 'Great Vibes', cursive; font-size: 32px; color: #111827; margin: 0; position: absolute; bottom: 55px; left: 0; right: 0; z-index: 1; white-space: nowrap;">Course Director</p>
                            
                            <!-- Signature Line (At bottom) -->
                            <div style="position: absolute; bottom: 5px; left: 0; right: 0; border-bottom: 2px solid #111827;"></div>
                            
                            <!-- Signatory Subtitle (Below line) -->
                            <p style="position: absolute; top: 70px; left: 0; right: 0; font-size: 10px; font-weight: 900; color: #6b7280; text-transform: uppercase; letter-spacing: 2px;">Authorized Signatory</p>
                        </div>
                    </div>

                    <!-- Official Seal (Right) -->
                    <div style="text-align: right; width: 220px; display: flex; justify-content: flex-end;">
                         <div style="
                            width: 80px; 
                            height: 80px; 
                            border: 2.5px double #F8510C; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            transform: rotate(-10deg);
                            background: rgba(248, 81, 12, 0.01);
                         ">
                            <span style="font-size: 10px; font-weight: 900; color: #F8510C; text-align: center; line-height: 1.1;">OFFICIAL<br/>GRADUATE<br/>SEAL</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(element);

    try {
        // Use html2canvas to render the element to a canvas
        const canvas = await html2canvas(element, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            logging: false,
            backgroundColor: null
        });

        const imgData = canvas.toDataURL('image/png');

        // Create PDF (landscape A4)
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [1120, 792]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, 1120, 792);
        pdf.save(`Certificate-${courseTitle.replace(/\s+/g, '-')}.pdf`);

    } catch (error) {
        console.error('Certificate generation failed:', error);
    } finally {
        document.body.removeChild(element);
    }
};
