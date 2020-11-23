export default function () {
  return (
    <div>
      <a
        _focus={{
          bg: "primary",
          borderWidth: "4px"
        }}
        _hover={{
          color: "red",
          transform: "rotate(90deg)"
        }}>Link</a>
    </div>
  );
}