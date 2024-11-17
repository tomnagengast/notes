{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  
  outputs = { self, nixpkgs }: {
    devShell.aarch64-darwin = nixpkgs.legacyPackages.aarch64-darwin.mkShell {
      buildInputs = with nixpkgs.legacyPackages.aarch64-darwin; [
        git
        nodejs
        nodePackages.prettier
      ];

      # shellHook = ''
      # '';
    };
  };
}
