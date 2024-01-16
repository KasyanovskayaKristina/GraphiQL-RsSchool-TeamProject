import Image from 'next/image';

import githubIcon from '../../public/github-icon.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='flex w-full max-w-[1800px] items-center justify-evenly px-10 py-3 text-2xl font-bold mobile:flex-col mobile:gap-4 mobile:text-xl tablet:flex-col tablet:gap-4 tablet:text-xl'>
      <p>© {currentYear}</p>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-4 mobile:gap-1 tablet:gap-1'>
            <Image src={githubIcon} alt='github-icon' width={30} height={30} />
            <a
              href='https://github.com/KirillGenin'
              target='_blank'
              rel='noreferrer'
            >
              KirillGenin
            </a>
          </div>
          <div className='flex items-center gap-4 mobile:gap-1 tablet:gap-1'>
            <Image src={githubIcon} alt='github-icon' width={30} height={30} />
            <a
              href='https://github.com/KasyanovskayaKristina'
              target='_blank'
              rel='noreferrer'
            >
              KristinaKasyanovskaya
            </a>
          </div>
          <div className='flex items-center gap-4 mobile:gap-1 tablet:gap-1'>
            <Image src={githubIcon} alt='github-icon' width={30} height={30} />
            <a
              href='https://github.com/Maltsau'
              target='_blank'
              rel='noreferrer'
            >
              Maltsau
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href='https://rs.school/react/' target='_blank' rel='noreferrer'>
          <Image
            src='/rs_school_js.svg'
            alt='RsSchoolLogo'
            width={150}
            height={150}
            style={{ width: 150, height: 150 }}
          />
        </a>
      </div>
    </footer>
  );
}
