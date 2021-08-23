import party from '../../../_assets/svg/party.svg';

export const HomeHero = (): JSX.Element => {
  return (
    <main className="container h-full flex flex-col md:flex-row justify-center items-center md:mx-auto">
      <div className="flex items-center justify-center mb-5 ml-8">
        <span className="font-title text-6xl xl:text-8xl font-bold">
          share your <br />
          best moments.
        </span>
      </div>
      <div className="flex items-center justify-center">
        <img src={party} alt="party" />
      </div>
    </main>
  );
};
