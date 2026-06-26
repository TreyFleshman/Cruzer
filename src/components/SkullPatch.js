function SkullPatch({ size = 90 }) {
  return (
    <div className="patch-square" style={{ width: size, height: size }}>
      <img src="/images/cruzer-crew-square.png" alt="Skull and crossbones patch" className="skull-icon" />
    </div>
  );
}

export default SkullPatch;
