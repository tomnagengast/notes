{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  
  outputs = { self, nixpkgs }: {
    devShell.aarch64-darwin = nixpkgs.legacyPackages.aarch64-darwin.mkShell {
      buildInputs = with nixpkgs.legacyPackages.aarch64-darwin; [
        git
        nodejs
        nodePackages.prettier
        
        (google-cloud-sdk.withExtraComponents [
          google-cloud-sdk.components.gke-gcloud-auth-plugin
        ])
      ];

      # shellHook = ''
      # '';
    };
  };
}
