import React from 'react';
import Tilt from 'react-parallax-tilt';
import { UseCaseImage } from './styles';

export interface ContentProviderProps {
  content: React.ReactNode;
}

export const ContentComponent = () => {
  const DATA = [
    {
      content: (
        <UseCaseImage
          src={
            'https://i.ibb.co/HX05d9k/temporary-lifeos.png' ||
            '/features/dark/workspace.png'
          }
        />
      ),
    },
    { content: 'The best' },
  ];

  const IMAGE_LINKS: string[] = [
    'https://i.ibb.co/BZ1fScG/03-D01-B62-7741-41-D9-BD0-D-6-AB91-A032-B25-1-201-a.jpg',
    'https://i.ibb.co/GpfgtCR/3-D869-E20-C216-4-CC7-AA32-513-A5-CBE94-EE-1-201-a.jpg',
    'https://i.ibb.co/dj3G261/5-CF7-CF8-B-EBCB-4-A98-B79-E-37-CFB52337-B7-1-201-a.jpg',
    'https://i.ibb.co/hy8WpFL/7-B09-DC1-E-8-F72-4566-B91-D-20-A9-A26-C1-AE4-1-201-a.jpg',
    'https://i.ibb.co/8mmRTJf/11-F0-DECA-9364-4400-ABDB-E8-C138-D7-B075-1-201-a.jpg',
    'https://i.ibb.co/B331tt9/24-BEF3-A6-0-AAF-45-B2-98-C2-892-A4-DE994-B2-1-201-a.jpg',
    'https://i.ibb.co/L0hHXKB/29-AD1488-8-E5-D-450-F-8-E25-355-F8-CE9-A7-B4-1-201-a.jpg',
    'https://i.ibb.co/0YgGqVb/106-F5-E00-7-FFF-4531-BFD2-3-AD514697779-1-201-a.jpg',
    'https://i.ibb.co/L9Zqmb4/1059-C8-EB-ABCB-4981-9-E58-E6547-C8-B5-C0-A-1-201-a.jpg',
    'https://i.ibb.co/NjyMJR7/920529-A6-65-B2-40-D3-84-C4-F53-F9-AB00094-1-201-a.jpg',
    'https://i.ibb.co/QF6ff7j/AC5-C78-AD-10-AE-4899-AF47-3-E83-D933792-C-1-201-a.jpg',
    'https://i.ibb.co/7GQnCTL/B00396-DA-23-C6-4457-9161-D59-DF3827931-1-201-a.jpg',
    'https://i.ibb.co/84qyMXS/FD7851-A6-80-F8-4666-8975-C7-DAC58-FA339-1-201-a.jpg',
    'https://i.ibb.co/W2JDDF5/2-E86-E699-30-D7-467-B-9-D7-A-D42368845-A09.jpg',
    'https://i.ibb.co/PgbxqQr/4-A7-C2-A01-83-CB-4-B35-8628-F13-FDCC59-F15.jpg',
    'https://i.ibb.co/y8dTT6v/4-C3-CDCD4-A868-469-C-944-E-0-C93-F5-CF080-D-1-201-a.jpg',
    'https://i.ibb.co/LYBwtmH/9-E582-E8-A-9-A78-4-E09-BD1-E-1-A09-B64-ED53-E.jpg',
    'https://i.ibb.co/FqrSVhg/44-B0-BC21-ED16-44-C9-B8-D1-224-DD9-ABD3-C2.jpg',
    'https://i.ibb.co/0XGz1st/62-EC599-F-3-F12-4307-A1-B4-986-B15-E9-DD12.jpg',
    'https://i.ibb.co/s18BTJz/65-EAB57-A-95-AA-492-F-BBBC-10-CF6126246-E.jpg',
    'https://i.ibb.co/W2s7sv0/70-B626-D7-7735-4-B8-A-9677-1-EA6-DFE1-F68-C.jpg',
    'https://i.ibb.co/CJWBKXz/79-B9-CC7-D-14-C4-4555-B8-A4-59-A5-E24196-A2.jpg',
    'https://i.ibb.co/0KjwTCv/602-C4762-E21-F-4-F71-9-C72-EE10266699-AB.jpg',
    'https://i.ibb.co/WPyNP93/960-F4-ED2-FA70-4433-B033-CE38-F4-B4-E521.jpg',
    'https://i.ibb.co/DpchR0j/3838-C4-AB-F4-BB-45-C8-BE87-D8-BD87-F01-D4-B.jpg',
    'https://i.ibb.co/qyhCbyn/7874-EC9-F-1253-4-F5-B-8848-F7-E341-E01-D76.jpg',
    'https://i.ibb.co/bNhGXGL/8387-C358-9-A4-F-4688-81-DD-802-E5576-DDAE.jpg',
    'https://i.ibb.co/zn4qmhv/32622-FCF-2-C82-4-F6-D-B59-B-C658-CB41-CC45.jpg',
    'https://i.ibb.co/JdD831b/53949-F4-A-4-B67-4375-A3-E4-E5481313-D214.jpg',
    'https://i.ibb.co/fpGMkrH/7681559-B-49-F5-4-C4-D-A378-8-B62-D8541-B0-C.jpg',
    'https://i.ibb.co/QjhTjkQ/11556528-5-A43-4-D17-8-E23-A32501-B4-F03-B.jpg',
    'https://i.ibb.co/pwMm3NW/60951763-A5-FF-4-F5-D-B9-D3-AC862-C99-EA15.jpg',
    'https://i.ibb.co/vcGJYBX/A0-FBD1-C9-8-AB3-4-CAB-9-E3-C-CA1-EE904497-E.jpg',
    'https://i.ibb.co/C5rx3n2/A8-EBEEC4-7365-474-B-A7-E6-1414-FC62-ED7-D.jpg',
    'https://i.ibb.co/6PPF9qv/B03-A62-D2-8537-4-C56-9624-414-D6-EDF60-F3.jpg',
    'https://i.ibb.co/71j6GnH/C6-DF3-BAE-D8-E2-4912-9295-4-EB32-CA29-C3-C.jpg',
    'https://i.ibb.co/TR1vByR/D81-DC3-E8-A7-CD-4-A0-E-809-F-A4-FA5-D1-AE857.jpg',
    'https://i.ibb.co/2PSn7JP/D81-DC3-E8-A7-CD-4-A0-E-809-F-A4-FA5-D1-AE857.jpg',
    'https://i.ibb.co/7JHKT3m/DF9-E90-EC-D8-DD-4-D9-A-BECD-7-F8-C6834-AB73.jpg',
    'https://i.ibb.co/VLzZLGx/E54-D160-F-6-DF8-46-FB-9-D35-FC5-AE857538-E.jpg',
    'https://i.ibb.co/1G4V78Q/EBC205-A8-D302-404-D-B220-22443-A9-EDEDE.jpg',
    'https://i.ibb.co/gtVwGdz/ED230335-EBF4-4-CD6-A5-E8-0-E57842-F7968.jpg',
    'https://i.ibb.co/nQVCMwH/F5-B44663-2-AD1-4-F18-960-C-DEEC6837-C619.jpg',
  ];

  return (
    <>
      {IMAGE_LINKS.map((elem, idx) => {
        const updatedIdx: number = idx + 1;
        return (
          <div
            key={idx}
            className={`keen-slider__slide number-slide${updatedIdx}`}
          >
            <UseCaseImage src={elem} />
          </div>
        );
      })}
      {/* {DATA.map((item, idx) => {
        const updatedIdx: number = idx + 1;
        return (
          <div
            key={idx}
            className={`keen-slider__slide number-slide${updatedIdx}`}
          >
            {item.content}
          </div>
        );
      })} */}
    </>
  );
};
