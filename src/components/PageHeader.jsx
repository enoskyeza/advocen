import PropTypes from 'prop-types';

export default function PageHeader({ image, title, subtitle }) {
  return (
    <section className="relative overflow-hidden text-white py-20">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      />
      {/* Brand gradient overlay (matches site colors) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] to-[#2c7a7b] opacity-70" aria-hidden="true" />

      {/* Copy */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {title && (
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
          )}
          {subtitle && (
            <p className="text-xl text-gray-200 max-w-xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}

PageHeader.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

PageHeader.defaultProps = {
  subtitle: '',
};
