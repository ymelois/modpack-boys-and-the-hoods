{
  description = "minecraft modpack editing environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-unstable";
  };

  outputs =
    {
      nixpkgs,
      ...
    }:
    let
      system = "x86_64-linux";

      pkgs = import nixpkgs {
        inherit system;
      };
    in
    {
      devShells."${system}".default = pkgs.mkShell {
        nativeBuildInputs = with pkgs; [
          packwiz
        ];
      };
    };
}
