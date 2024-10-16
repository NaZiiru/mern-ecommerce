import { Link } from "react-router-dom";

const UnAuth = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-teal-950">
            403
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            ACCÈS NON AUTORISÉ
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Désolé, vous n'avez pas l'autorisation d'accéder à cette page.
            Veuillez vous connecter avec des identifiants valides ou retourner à
            la page d'accueil.
          </p>
          <Link
            to="/auth/login"
            className="inline-flex text-white bg-teal-950 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Aller à la page de connexion
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnAuth;
